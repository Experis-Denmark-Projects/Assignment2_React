import styled from "styled-components";

export const TranslationIconContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 170px);
    grid-template-rows: repeat(10, 150px);
    column-gap: 0px;
    row-gap: 20px;
    align-items: center;
    justify-content: left;
    img{
        width: fit-content;
    }
`;