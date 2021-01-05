import {lazy} from 'react';
import styled from 'styled-components';

const LazyStrawberryIcon = lazy(() =>
    import('@components/Icons/StrawBerry/strawberry'),
);
let sizeImage = '90px';

export const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    position: absolute;
    background: hsl(232, 47%, 52%);
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
`;

export const TextWrapper = styled.p`
    font-size: 50px;
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
`;

export const ImageWrapper = styled(LazyStrawberryIcon)`
    width: ${sizeImage};
    height: ${sizeImage};
    margin: 25px 0 0 0;
`;
