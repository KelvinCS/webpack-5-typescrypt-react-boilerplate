/**
 * Created by: Matheus Benites (benites.amorim@gmail.com)
 */
import React, { Suspense } from 'react';

import * as S from './styled';

export const App = (): React.ReactElement => (
    <S.Wrapper>
        <S.TextWrapper>It works</S.TextWrapper>
        <Suspense fallback={'loading...'}>
            <S.ImageWrapper />
        </Suspense>
    </S.Wrapper>
);
