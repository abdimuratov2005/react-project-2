import { IMenu } from './index'

const menuLeft: IMenu[] = [
    {
        sysname: 'game',
        name: 'More Games',
        special: true
    },
    {
        sysname: 'booster',
        name: 'Boosters',
    },
    {
        sysname: 'plus',
        name: 'Work with us',
    },
];

const menuRight: IMenu[] = [
    {
        sysname: 'blog',
        name: 'Blog',
    },
    {
        sysname: 'shield',
        name: 'Warranties',
    },
    {
        sysname: 'support',
        name: 'Support',
    },
];

export const mocks = () => {
    
    return {
        menuLeft,
        menuRight
    }
}