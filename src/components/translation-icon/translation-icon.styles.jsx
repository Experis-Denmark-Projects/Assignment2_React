import styled from "styled-components";

export const TranslationIconContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 50px);
    grid-template-rows: repeat(10, 50px);
    column-gap: 0px;
    row-gap: 0px;
    align-items: center;
    justify-content: left;
    img{
        width: 30px;
        height: 30px;
    }
`;