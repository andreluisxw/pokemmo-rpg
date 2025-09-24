'use client'
import styles from "./page.module.css";
import useGameManager from "@/hooks/gameManager";
import Image from "next/image"; // Importe o componente Image do Next.js

export default function Home() {
    const {heroi, vilao, log, turnoHeroi, handlerAcaoHeroi, gameOver, vencedor} = useGameManager();

    return (
        <div className={styles.gameWrapper}>
            <div className={styles.containerPrincipal}>
                {/* Área Superior: Informações dos Combatentes */}
                <div className={styles.areaCombate}>
                    {/* Imagem do Vilão */}
                    <div className={styles.imagemVilao}>
                        {/* Exemplo: charizard.png para vilao */}
                        <Image
                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/abae6e28-7eb5-4262-8145-4dc4ac179c1d/d91l46h-b390d769-85c8-4608-ac79-2bce10bc9748.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9hYmFlNmUyOC03ZWI1LTQyNjItODE0NS00ZGM0YWMxNzljMWQvZDkxbDQ2aC1iMzkwZDc2OS04NWM4LTQ2MDgtYWM3OS0yYmNlMTBiYzk3NDguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.OyL_01qYOLOQuuiZZdnZFm36BPnQEawtAQG_2Gn4Fqk"
                            alt={heroi.nome}
                            width={400} // Aumentado para 250
                            height={400} // Aumentado para 250
                            unoptimized={true} // Use unoptimized para GIFs animados
                            priority
                        />
                    </div>

                    {/* Informações do Vilão */}
                    <div className={styles.painelVilao}>
                        <div className={styles.infoPersonagem}>
                            <span className={styles.nomePersonagem}>{vilao.nome}</span>
                            <div className={styles.barraVidaExterna}>
                                <div
                                    className={styles.barraVidaInterna}
                                    style={{width: `${vilao.vida > 0 ? vilao.vida : 0}%`}}
                                ></div>
                            </div>
                            <span className={styles.vidaNumerica}>HP: {vilao.vida > 0 ? vilao.vida : 0}/100</span>
                        </div>
                    </div>

                    {/* Imagem do Herói */}
                    <div className={styles.imagemHeroi}>
                        <Image
                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/abae6e28-7eb5-4262-8145-4dc4ac179c1d/d8zek4p-9cbcb280-c2f1-4e88-93c1-49e7e65db8c6.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9hYmFlNmUyOC03ZWI1LTQyNjItODE0NS00ZGM0YWMxNzljMWQvZDh6ZWs0cC05Y2JjYjI4MC1jMmYxLTRlODgtOTNjMS00OWU3ZTY1ZGI4YzYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XH9v-nGZ4i6b88s9PGNV-LDh4QyLRPFgEbPp6kRd6Qk"
                            alt={heroi.nome}
                            width={400} // Aumentado para 250
                            height={400} // Aumentado para 250
                            unoptimized={true} // Use unoptimized para GIFs animados
                            priority
                        />
                    </div>

                    {/* Informações do Herói */}
                    <div className={styles.painelHeroi}>
                        <div className={styles.infoPersonagem}>
                            <span className={styles.nomePersonagem}>{heroi.nome}</span>
                            <div className={styles.barraVidaExterna}>
                                <div
                                    className={styles.barraVidaInterna}
                                    style={{width: `${heroi.vida > 0 ? heroi.vida : 0}%`}}
                                ></div>
                            </div>
                            <span className={styles.vidaNumerica}>HP: {heroi.vida > 0 ? heroi.vida : 0}/100</span>
                        </div>
                    </div>
                </div>

                {/* Área Inferior: Log de Eventos e Menu de Ações */}
                <div className={styles.areaInteracao}>
                    {/* Log de Eventos */}
                    <div className={styles.logBatalha}>
                        <p>{log}</p>
                    </div>

                    {/* Menu de Ações */}
                    <div className={styles.menuAcoes}>
                        {gameOver ? (
                            <div className={styles.mensagemFinal}>
                                {vencedor === "heroi" ? (
                                    <h2>Você venceu!</h2>
                                ) : (
                                    <h2>Você perdeu!</h2>
                                )}
                            </div>
                        ) : (
                            <>
                                <p className={styles.promptAcao}>O que {heroi.nome} deve fazer?</p>
                                <div className={styles.botoesAcao}>
                                    <button onClick={() => handlerAcaoHeroi("atacar")} disabled={!turnoHeroi || gameOver}>Atacar</button>
                                    <button onClick={() => handlerAcaoHeroi("defender")} disabled={!turnoHeroi || gameOver}>Defender</button>
                                    <button onClick={() => handlerAcaoHeroi("usarPocao")} disabled={!turnoHeroi || gameOver}>Usar Poção</button>
                                    <button onClick={() => handlerAcaoHeroi("correr")} disabled={!turnoHeroi || gameOver}>Fugir</button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}