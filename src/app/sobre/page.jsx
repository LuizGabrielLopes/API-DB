"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import styles from "./sobre.module.css";

export default function Sobre() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>
                    Sobre a API
                </h1>

                <Link
                    href="https://web.dragonball-api.com/documentation"
                    target="blank"
                >
                    <h1 className={styles.linkTitle}>
                        Documentação oficial da API
                    </h1>
                </Link>

                <p className={styles.description}>
                    A API Dragon Ball é uma API REST abrangente inspirada na icônica série
                    de televisão Dragon Ball. Esta API concede aos usuários acesso a um
                    extenso banco de dados com centenas de personagens, imagens,
                    transformações e planetas do universo Dragon Ball. Ela abrange
                    informações canônicas derivadas de várias séries, incluindo Dragon
                    Ball Z, Dragon Ball GT, Dragon Ball Super, além de filmes e um toque
                    de Dragon Ball Heroes.
                </p>
                
                <p className={styles.description}> 
                    Esta aplicação utiliza a URL base https://www.dragonball-api.com/api, utilizando como o endpoint /characters para buscar dados dos personagens. A API retorna informações como id, name, ki, maxKi, race, gender, description, image, affiliation e deletedAt para cada personagem consultado.
                </p>

                <Link href="/characters">
                    <Button type="primary">Confira a lista de personagens !</Button>
                </Link>
            </div>
        </div>
    );
}