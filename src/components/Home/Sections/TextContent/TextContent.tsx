import React from "react";
import Title from "components/common/Title";
import styleSections from "../Sections.module.scss";

type DataType = {
    title: Array<string>,
    textFirstPart: Array<string>,
    textSecondPart: Array<string>,
}

type TextContentPropsType = {
    data: DataType,
};

const TextContent: React.FC<TextContentPropsType> = ({ data }) => (
    <div id="textContent" className={styleSections.textContent}>
        <Title className="" headerSize="h1">{data.title}</Title>
        <div className={styleSections.subheader}>
            <span>{data.textFirstPart}</span>
            {data.textSecondPart.length > 1 ? (
                <span>{data.textSecondPart}</span>
            ) : null}
        </div>
    </div>
);

export default TextContent;
