import React from "react";

export const serializers = {
    types: {
        block: (props) => {
            const style = props.node.style || "normal";

            if (/^h\d/.test(style)) {
                const level = style.replace(/[^\d]/g, "");
                return React.createElement(
                    `h${level}`,
                    { className: "text-4xl mt-4" },
                    props.children
                );
            }

            return style === "blockquote" ? (
                <blockquote> –{props.children} </blockquote>
            ) : (
                <p> {props.children} </p>
            );
        },
        code: (props) =>
            "" || (
                <pre data-language={props.node.language}>
                    <code> {props.node.code} </code>
                </pre>
            ),
        youtube: (props) => <pre> {JSON.stringify(props, null, 2)} </pre>,
    },
    list: (props) =>
        "" ||
        (props.type === "bullet" ? (
            <ul className="list-disc list-outside"> {props.children} </ul>
        ) : (
            <ol className="list-decimal list-outside"> {props.children} </ol>
        )),
    listItem: (props) =>
        "" ||
        (props.type === "bullet" ? (
            <li> {props.children} </li>
        ) : (
            <li> {props.children} </li>
        )),
    marks: {
        strong: (props) => "" || <strong> {props.children} </strong>,
        em: (props) => "" || <em> {props.children} </em>,
        code: (props) => "" || <code> {props.children} </code>,
    },
};