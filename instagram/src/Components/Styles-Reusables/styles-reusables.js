
import styled from 'styled-components';

const Username = styled.h4`
    margin-block-start: 0;
    margin-block-end:0; 
    font-weight: ${props => props.bold ? "bolder": "bold"}; 
`;

export default Username