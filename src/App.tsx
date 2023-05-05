import React from 'react';
import './App.css';

type ChildrenProps = {
    children: React.ReactNode;
}

function Container({children}: ChildrenProps) {
    return <div className="max-w-[620px] mx-auto bg-red-400 text-white">{children}</div>;
}

function Header({children}: ChildrenProps) {
    return <header className="flex justify-between py-2 border-b border-red-700">{children}</header>;
}

function HeaderLogo() {
    return (
        <div className="flex items-center cursor-pointer">
            <img className="w-5 h-fit mr-1" src="https://pomofocus.io/images/icon-white2.png" alt="Pomofocus Logo"/>
            <h1 className="font-bold text-xl">Pomofocus</h1>
        </div>
    )
}

function HeaderButtonsWrap({children}: ChildrenProps) {
    return (
        <div className="flex justify-between gap-2">
            {children}
        </div>
    )
}

type HeaderButtonProps = {
    text: string
    imgSrc: string
}

function HeaderButton({text, imgSrc}: HeaderButtonProps) {
    return (
        <button className="flex items-center px-3 bg-red-300 rounded opacity-90 hover:opacity-100 transition-colors"
                type="button">
            <img className="w-4 h-fit mr-1" src={imgSrc}/>
            <p className="text-sm">{text}</p>
        </button>
    )
}

function Main({children}: ChildrenProps) {
    return (
        <div>
            {children}
        </div>
    )
}

function MainTimerWrap({children}: ChildrenProps) {
    return (
        <div className="mx-20 mt-6 mb-3 py-3 px-20 bg-red-300 rounded-md">
            {children}
        </div>
    )
}

function App() {
    return (
        <Container>
            <Header>
                <HeaderLogo/>
                <HeaderButtonsWrap>
                    <HeaderButton text={"Report"} imgSrc={"https://pomofocus.io/icons/graph-white.png"}/>
                    <HeaderButton text={"Setting"} imgSrc={"https://pomofocus.io/icons/config-white.png"}/>
                    <HeaderButton text={"Login"} imgSrc={"https://pomofocus.io/icons/user-white.png"}/>
                </HeaderButtonsWrap>
            </Header>
            <Main>
                <MainTimerWrap>
                    fghg
                </MainTimerWrap>
            </Main>
        </Container>
    );
}

export default App;
