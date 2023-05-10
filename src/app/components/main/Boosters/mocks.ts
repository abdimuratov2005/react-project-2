export interface IBoostersGame {
    name?: string;
    sysname?: string;
    active?: boolean;
    plug?: boolean;
}
    
interface IMocks {
    games: IBoostersGame[];
}

export const mocks = (): IMocks => {
    
    return {
        games: [
            {    
                name: 'Apex Legends',
                sysname: 'apex',
            },
            {
                name: 'Call od Duty',
                sysname: 'cod',
            },
            {
                name: 'CSGO',
                sysname: 'csgo',
            },
            {
                name: 'Destiny 2',
                sysname: 'destiny2',
            },
            {
                name: 'Dota2',
                sysname: 'dota2',
            },
            {
                name: 'Escape from Tarkov',
                sysname: 'eft',
            },
            {
                name: 'Fifa',
                sysname: 'fifa',
            },
            {
                name: 'Final Fantasy',
                sysname: 'finalfantasy',
            },
            {
                name: 'Genshin Impact',
                sysname: 'genshin',
            },
            {
                name: 'Hearthstone',
                sysname: 'heartstone',
            },
            {        
                name: 'World of Warcraft',
                sysname: 'lich',
            },
            {
                name: 'League of Legends',
                sysname: 'lol',
            },
            {
                name: 'Lost Ark',
                sysname: 'lostark',
            },
            {
                name: 'Madden NFL',
                sysname: 'madden',
            },
            {
                name: 'NBA',
                sysname: 'nba',
            },
            {
                name: 'New World',
                sysname: 'newworld',
                active: true
            },
            {
                name: 'NHL',
                sysname: 'nhl',
            },
            {
                name: 'Overwatch 2',
                sysname: 'overwatch2',
            },
            {
                name: 'Path of Exile',
                sysname: 'poe',
            },
            // {
            //     name: 'PUBG',
            //     sysname: 'pubg',
            // },
            {
                name: 'PUBG',
                sysname: 'pubg2',
            },
            {
                name: 'Rainbow 6',
                sysname: 'rainbow6',
            },
            {
                name: 'Rocket League',
                sysname: 'rocketleague',
            },
            {
                name: 'Runescape',
                sysname: 'runescape',
            },
            {
                name: 'TFT',
                sysname: 'tft',
            },
            {
                name: 'Valorant',
                sysname: 'valorant',
            },
            {
                name: 'World of Tanks',
                sysname: 'wot',
            },
            {
                name: 'World of Warcraft',
                sysname: 'wow',
            },
            {
                name: 'World of Warcraft',
                sysname: 'wowr',
            },
        ]
    }
}