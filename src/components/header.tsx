import {Heading, useColorMode } from "@chakra-ui/react"
import { IconButton } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import styles from './header.module.css';

function Header() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <header className={styles.header}>
            <div className={styles.menuLeft}/>
            <Heading as='h1' size='xl' isTruncated className={styles.center}>
                Wordle Solver
            </Heading>
            <IconButton
                variant="ghost"
                onClick={toggleColorMode}
                aria-label='Change color mode'
                className={styles.menuRight}
                icon={colorMode === 'light' ? <MoonIcon/> : <SunIcon/>} />

        </header>
    )
}

export default Header