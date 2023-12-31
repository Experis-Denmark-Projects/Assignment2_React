import styled from "styled-components";

export const TranslationIconContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 25px);
    grid-template-rows: repeat(1, 90px);
    column-gap: 0px;
    row-gap: 0px;
    align-items: center;
    justify-content: left;
    img{
        width: 30px;
        height: 30px;
    }
    p{
        transform: translate(8px, -12px);
    }
`;