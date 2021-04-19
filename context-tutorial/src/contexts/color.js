import { createContext, useState } from 'react';

const ColorContext = createContext({
    state: {color: 'black', subcolor: 'red'},
    actions: {
        setColor: () => {console.log('????')},
        setSubcolor: () => {console.log('!!!!')},
    },
});

const ColorProvider = ({children}) => {
    const [color, setColor] = useState('black');
    const [subcolor, setSubcolor] = useState('yellow');

    const value = {
        state: {color, subcolor},
        actions: {
            setColor, setSubcolor
        }
    }

    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    )
}

const {Consumer: ColorConsumer} = ColorContext;

export {ColorProvider, ColorConsumer};

export default ColorContext;