// App common props
import {IPanelStyles, IStackItemStyles, IStyleFunctionOrObject, ITheme} from '@fluentui/react';

export interface IRootAppProps {
    title: string;
    theme?: ITheme;
    styles?: IStyleFunctionOrObject<IAppStyleProps, IAppStyles>;
};

export declare type IAppStyleProps = Pick<IRootAppProps, 'theme'> & {
    isTeams?: boolean;
};


export interface IAppStyles {
    contentStack: Partial<IStackItemStyles>;
    sidebarPanel: Partial<IPanelStyles>;
}
