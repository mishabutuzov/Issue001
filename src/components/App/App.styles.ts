import {IAppStyleProps, IAppStyles} from "./App.types";
import {mergeStyleSets} from "@fluentui/merge-styles";


export const getStyles = (props: IAppStyleProps): Partial<IAppStyles> => {
    let styles: Partial<IAppStyles> = {}

    if (props.theme) {
        const {palette: p, semanticColors: s} = props.theme;

        let rootContainerBg = p.white


        styles = {
            contentStack: {
                root: {
                    position: 'relative',
                    backgroundColor: rootContainerBg,
                }
            },
            sidebarPanel: {
                content: {
                    padding: 0,

                }
            }


        };
    }
    return styles;
};


export const rootStyles = mergeStyleSets({
    root: {
        background: 'transparent!important',
        backgroundColor: 'transparent!important',
        height: '100%',
        overflow: 'hidden'
    },
});

// Deprecated
// export const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
//     root: { marginTop: 10 },
// };


