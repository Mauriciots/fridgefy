import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;

    ul {
        flex-grow: 1;
        display: flex;
        list-style: none;
        
        li {
            padding: 0 1rem;
        }
    }
`;

export default StyledHeader;