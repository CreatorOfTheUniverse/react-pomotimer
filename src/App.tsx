import React, {useEffect, useState} from 'react';
import './App.css';

type ChildrenProps = {
    children: React.ReactNode;
}

function Container({children}: ChildrenProps) {
    return <div className="max-w-[620px] mx-auto bg-red-400 text-white">{children}</div>;
}

function Header({children}: ChildrenProps) {
    return (
        <>
            <header className="flex justify-between py-2 border-red-700">{children}</header>
            <div className="border-b-[3px] rounded w-[21%]"></div>
        </>
    )
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
        <div className="p-3">
            {children}
        </div>
    )
}

function MainWrap({children}: ChildrenProps) {
    return (
        <div className="mt-6 mb-3 py-3 bg-red-300 rounded-md max-w-md mx-auto">
            {children}
        </div>
    )
}

function MainButtons() {
    const [active, setActive] = useState(1)
    const activeButtonClasses = " bg-red-400 font-bold"
    const buttonClasses = "flex items-center px-3 rounded opacity-90 hover:opacity-100 transition-colors"
    const handleClick = (buttonNumber: number) => {
        return setActive(buttonNumber)
    }
    return (
        <div className="flex justify-center gap-2">
            <button onClick={() => {
                handleClick(1)
            }} className={active === 1 ? buttonClasses + activeButtonClasses : ""} type="button">
                <p className="whitespace-nowrap">Pomodoro</p>
            </button>
            <button onClick={() => {
                handleClick(2)
            }} className={active === 2 ? buttonClasses + activeButtonClasses : ""} type="button">
                <p className="whitespace-nowrap">Short Break</p>
            </button>
            <button onClick={() => {
                handleClick(3)
            }} className={active === 3 ? buttonClasses + activeButtonClasses : ""} type="button">
                <p className="whitespace-nowrap">Long Break</p>
            </button>
        </div>
    )
}

function MainTimer() {
    const [time, setTime] = useState(10)
    const [startTimer, setStartTimer] = useState(false)
    const [switchButton, setSwitchButton] = useState(true)
    const textButton = switchButton ? "START" : "PAUSE"
    useEffect(() => {
        if (startTimer) {
            if (time !== 0) {
                setTimeout(() => {
                    setTime(prevState => time - 1)
                }, 1000)
            }
        }
    }, [time, startTimer])
    return (
        <div className="flex flex-col items-center">
            <div className="text-8xl font-bold text-center my-6">
                {time}
            </div>
            <button onClick={() => {
                setStartTimer(true)
                setSwitchButton(!switchButton)
            }} type="button" className="px-7 py-3 mb-3 w-48 mx-auto bg-white rounded drop-shadow-lg text-2xl text-red-400 font-bold">{textButton}
            </button>
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
                <MainWrap>
                    <MainButtons/>
                    <MainTimer/>
                </MainWrap>
            </Main>
        </Container>
    );
}

export default App;
