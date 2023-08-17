import { Button, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const SubHeadings = ({ data, selectedContentIndex, showBreadCrumbs }) => {
    const isDarkMode = data.data.header.darkMode;
    const motivationalQuotes = data.data.header.motivationalQuotes;
    const randomQuoteIndex = Math.floor(
        Math.random() * motivationalQuotes.length - 1
    );

    return (
        <Flex
            mt={3}
            w={'90vw'}
            className={'subHeadings'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            {showBreadCrumbs ? (
                <Flex
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'centre'}
                >
                    <Link to={'/'}>
                        <Button className="back-button">BACK</Button>
                    </Link>
                </Flex>
            ) : (
                <>
                    <img
                        src='dsa.svg'
                        alt="Your Guided Journey to Algorithmic Mastery"
                        style={{
                            maxWidth: '300px',
                            height: 'auto',
                        }}
                    />
                    <Text
                        mt={2}
                        align={'center'}
                        fontWeight={'md'}
                        fontSize={'md'}
                        display={{ base: 'none', md: 'flex' }}
                        fontFamily={'customFamily'}
                        fontStyle={'normal'}
                        color={isDarkMode ? 'textColor_dark' : 'textColor'}
                    >
                        {'" ' +
                            motivationalQuotes[randomQuoteIndex].quote +
                            ' " - ' +
                            motivationalQuotes[randomQuoteIndex].author}
                    </Text>
                </>
            )}
        </Flex>
    );
};

export default SubHeadings;
