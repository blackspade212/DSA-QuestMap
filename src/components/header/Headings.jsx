import { Flex, Link } from '@chakra-ui/react';
import { DarkModeToggle } from '../icons/ProjectIcons.jsx';

const Headings = ({ data, setData }) => {
    const isDarkMode = data.data.header.darkMode;

    return (
        <Flex
            className={'headings'}
            w={'100vw'}
            px={6}
            mt={5}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
        >
            <img
                src={isDarkMode ? 'head_dark.svg' : 'head.svg'}
                alt="DSA Tracker Logo"
                style={{
                    maxWidth: '200px',
                    height: 'auto',
                }}
            />

            <DarkModeToggle data={data} setData={setData} toShow={true} />
        </Flex>
    );
};

export default Headings;
