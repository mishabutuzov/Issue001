import {mergeStyleSets} from "@fluentui/merge-styles";
import {classNamesFunction} from "@fluentui/react";
import {IAppStyleProps, IAppStyles} from "./App.types";

// @ts-ignore
export const getClassNames = classNamesFunction<IAppStyleProps, IAppStyles>({
    cacheSize: 100,
});

