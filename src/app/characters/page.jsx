"use client";

import axios from "axios";
import styles from "./character.module.css";
import { useEffect, useState, useRef } from "react";
import CharacterCard from "../../components/CharacterCard";
import { ToastContainer, toast } from "react-toastify";

export default function Characters() {
    const [search, setSearch] = useState("");
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const cacheRef = useRef(new Map());

    const fetchCharacters = async (name = "", pageNumber = 1) => {
        setLoading(true);
        setNotFound(false);
        const cache = cacheRef.current;
        const cacheKey = `${name}_${pageNumber}`;
        const nextPageNumber = pageNumber + 1;
        const nextCacheKey = `${name}_${nextPageNumber}`;

        const cleanCacheIfNeeded = () => {
            while (cache.size >= 5) {
                const firstKey = cache.keys().next().value;
                cache.delete(firstKey);
                console.log(`♻️ Removido do cache: ${firstKey}`);
            }
        };

        console.log("\n============== BUSCA INICIADA ==============");
        console.log(`📊 Cache anterior: ${cache.size} páginas`);

        let total = totalPages;

        if (cache.has(cacheKey)) {
            const cached = cache.get(cacheKey);
            setCharacters(cached.results);
            setTotalPages(cached.totalPages);
            total = cached.totalPages;
            setNotFound(false);
            setLoading(false);
            console.log(`✅ Usando cache: ${cacheKey}`);
        } else {
            try {
                console.log(`🔍 Buscando: nome="${name}", página=${pageNumber}`);
                
                // Tenta primeiro a URL básica da API
                const { data } = await axios.get(`https://dragonball-api.com/api/characters?page=${pageNumber}&limit=10`);

                console.log("📦 Resposta da API:", data);
                
                cleanCacheIfNeeded();
                cache.set(cacheKey, {
                    results: data.items || data.results || data || [],
                    totalPages: data.meta?.totalPages || data.info?.pages || Math.ceil((data.meta?.totalCount || data.items?.length || 10) / 10),
                });

                setCharacters(data.items || data.results || data || []);
                const calculatedTotalPages = data.meta?.totalPages || data.info?.pages || Math.ceil((data.meta?.totalCount || data.items?.length || 10) / 10);
                setTotalPages(calculatedTotalPages);
                total = calculatedTotalPages;
                setNotFound(false);
                console.log(`💾 Salvo no cache: ${cacheKey}`);
            } catch (error) {
                console.log("❌ Erro ao buscar personagens:", error);
                setCharacters([]);
                setNotFound(true);
            } finally {
                setLoading(false);
            }
        }

        if (nextPageNumber <= total && !cache.has(nextCacheKey)) {
            try {
                const res = await axios.get(`https://dragonball-api.com/api/characters?page=${nextPageNumber}&limit=10`);
                cleanCacheIfNeeded();
                cache.set(nextCacheKey, {
                    results: res.data.items || res.data.results || res.data || [],
                    totalPages: res.data.meta?.totalPages || res.data.info?.pages || Math.ceil((res.data.meta?.totalCount || res.data.items?.length || 10) / 10),
                });
                console.log(`📋 Prefetch salvo: ${nextCacheKey}`);
            } catch (err) {
                console.log(`❌ Prefetch falhou: ${nextCacheKey}`, err);
            }
        } else {
            console.log("ℹ️ Prefetch ignorado: já no cache ou fora do limite");
        }

        console.log(`📦 Cache final: ${cache.size} páginas`);
        for (const [key, val] of cache.entries()) {
            console.log(`📦 ${key}: ${val.results.length} personagens`);
        }
        console.log("============== FIM DA BUSCA ==============\n");
    };

    useEffect(() => {
        fetchCharacters(search.trim(), page);
    }, [page]);

    const handleSearch = () => {
        setPage(1);
        fetchCharacters(search, 1);
        toast.success(`Você pesquisou por ${search}`, {
            position: "top-left",
        });
    };

    const handleReset = () => {
        setSearch("");
        setPage(1);
        fetchCharacters("", 1);
        toast.success("Filtro foi resetado", { position: "top-left" });
    };

    const handleCardClick = (name) => {
        toast.info(`Você clicou em ${name}`, {});
    };

    return (
        <div className={styles.container}>
            <ToastContainer position="top-right" autoClose={7500} theme="light" />
            <h1 className={styles.title}>Personagens de Dragon Ball</h1>
            <div className={styles.controls}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Digite o nome do personagem"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={handleSearch} className={styles.buttonSearch}>
                    Pesquisar
                </button>
                <button onClick={handleReset} className={styles.buttonReset}>
                    Resetar
                </button>
            </div>

            <div className={styles.navControls}>
                <button
                    onClick={() => setPage((p) => Math.max(p - 1, 1))}
                    disabled={page === 1 || notFound}
                    className={styles.buttonNav}
                >
                    Página Anterior
                </button>

                <span className={styles.pageIndicator}>
                    Página {page} de {totalPages}
                </span>

                <button
                    onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                    disabled={page === totalPages || notFound}
                    className={styles.buttonNav}
                >
                    Próxima Página
                </button>
            </div>

            {notFound && (
                <h1 className={styles.notFound}>Nenhum personagem encontrado</h1>
            )}

            {loading ? (
                <div className={styles.loaderWrapper}>
                </div>
            ) : (
                <div className={styles.grid}>
                    {characters.map((char) => (
                        <CharacterCard
                            key={char.id}
                            character={char}
                            onClick={() => handleCardClick(char.name)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}