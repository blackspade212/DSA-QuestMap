import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import DSA from './components/index.jsx'
import { Flex } from '@chakra-ui/react'

function App({ fetchData }) {
    const [data, setData] = useState(fetchData)

    useEffect(() => {
        localStorage.setItem('A2Z_Archive', JSON.stringify(data))
    }, [data])

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <DSA
                        data={data}
                        setData={setData}
                        isHomeScreen={true}
                        selectedContentIndex={0}
                    />
                }
            />
            {data.data.content.map((contentData, index) => {
                return (
                    <Route
                        key={index}
                        path={contentData.contentPath}
                        element={
                            <DSA
                                data={data}
                                setData={setData}
                                isHomeScreen={false}
                                selectedContentIndex={index}
                            />
                        }
                    />
                )
            })}
        </Routes>
    )
}

export default App
