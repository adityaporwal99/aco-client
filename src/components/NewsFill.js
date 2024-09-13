import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Loader from "./Loader";
import { Col, Container, Row } from 'react-bootstrap'

function NewsFill() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function fetchData() {
        setLoading(true)
        try {
            const res = await axios.get(`https://aco-server.onrender.com/news`)
            setArticles(res.data.articles)
        }
        catch (error) {
            setError(error.response.data.error)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Container>
            <Row className="text-center justify-content-center mb-2">
                <h1>ACONEWS</h1>
                {loading && <Loader />}
                {error && <p>Error: {error}</p>}
            </Row>

            <Row className="gx-lg-5 mb-3" lg={3} xs={1} md={2}>
                {
                    articles.map(article => (
                        <Col key={article.title} className="mb-5">
                            <Card title={article.title}
                                description={article.description}
                                image={article.image}
                                url={article.url}
                                source={article.source.name}
                                publishedAt={article.publishedAt}
                            />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default NewsFill