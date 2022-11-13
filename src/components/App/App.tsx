import React from 'react'
import {IStackTokens, Stack, styled, ThemeProvider,} from '@fluentui/react';
import {IAppStyleProps, IAppStyles, IRootAppProps} from './App.types';
import {getStyles, rootStyles} from './App.styles';

const stackTokens: IStackTokens = {childrenGap: 0};

const AppBase: React.FunctionComponent<IRootAppProps> = (props: IRootAppProps) => {

    // Teams theme
    const isTeams = false;
    const styles = getStyles({theme: props.theme, isTeams})


    return (
        <Stack verticalFill={true} tokens={stackTokens}>


        </Stack>
    )
};


// @ts-ignore
const AppStyled: React.FunctionComponent<IRootAppProps> = styled<IRootAppProps, IAppStyleProps, IAppStyles>(
    AppBase,
    getStyles,
    undefined,
    {
        scope: 'AppRoot',
    },
);

const App: React.FunctionComponent = () => {
        return   <AppStyled title={"title"}/>
};

export default App;