import { ViewStyle, TextStyle } from 'react-native'

export interface IContainer {
    onPress(): any,
    disabled?: boolean,
    large?: boolean,
    small?: boolean
    shadow?: boolean,
    shadowSm?: boolean,
    shadowLg?: boolean,
    style?: ViewStyle,
    textStyle?: TextStyle
}

export interface IFullWidth extends IContainer {
    color?: string,
    text: string,
}

export interface IRounded extends IFullWidth {
    radius?: number,
    text: string,
}

export interface IOutline extends IRounded {
    borderWidth?: number,
    borderColor?: string,
    text: string,
}

export interface ICircle extends IContainer {
    onPress(): any,
    icon: React.ReactNode | any,
    color?: string
}