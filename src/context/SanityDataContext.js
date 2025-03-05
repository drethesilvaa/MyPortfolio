import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import sanityClient from "../client"; 


const SanityDataContext = createContext();


const fetchAuthor = async () => {
    const data = await sanityClient.fetch(`
    *[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url,
       "Skills": *[_type=='skills']{ 
        skill,
        skill_Level
      },
    }`);
    return data[0];
};


const fetchProjects = async () => {
    const data = await sanityClient.fetch(`
    *[_type == "project"] | order(date desc){
      title,
      description,
      Language_Frameworks,
      date,
      projectType,
      "projectImage": image.asset->url,
      Links,
      gallery    
    }`);
    return data;
};


export const SanityDataProvider = ({ children }) => {
    const { data: author, error: authorError, isLoading: isAuthorLoading } = useQuery({
        queryKey: ["author"],
        queryFn: fetchAuthor,
    });

    const { data: projects, error: projectsError, isLoading: isProjectsLoading } = useQuery({
        queryKey: ["projects"],
        queryFn: fetchProjects,
    });

    return (
        <SanityDataContext.Provider value={{
            author, isAuthorLoading, authorError,
            projects, isProjectsLoading, projectsError
        }}>
            {children}
        </SanityDataContext.Provider>
    );
};


export const useSanityData = () => {
    return useContext(SanityDataContext);
};
