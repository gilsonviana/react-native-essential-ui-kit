import { ViewStyle, TextStyle } from 'react-native'

export interface IContainer {
    style?: ViewStyle
    titleStyle?: TextStyle, 
    bodyStyle?: TextStyle, 
    actionStyle?: TextStyle, 
    color?: string,
    shadow?: boolean,
    shadowSm?: boolean,
    shadowLg?: boolean,
    radius?: number
}

export interface ICardAction extends IContainer {
    body: string,
    action: string,
    title: string,   
    onPress(): void,
}

export interface ICardSimple extends IContainer {
    body: string,
    onPress?(): void,
    title?: string,
    paddingTop?: number,
    backgroundImageUri?: string
}

export interface ICardAvatarAction extends IContainer {
    heading: string,
    headingStyle?: TextStyle,
    title: string,
    body: string,
    avatar?: () => JSX.Element,
    avatarStyle?: ViewStyle,
    avatarName?: string,
    avatarNameStyle?: TextStyle,
    avatarTitle?: string,
    avatarTitleStyle?: TextStyle,
}