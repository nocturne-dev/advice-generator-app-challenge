import type { FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";

import diceIcon from "../images/icon-dice.svg";

type SlipType = {
    advice: string;
    id: number;
}

const initAdvice: SlipType = {
    advice: "",
    id: -1
}

const Advice: FunctionalComponent = () => {
    const [slip, setSlip] = useState(initAdvice);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        retrieveAdvice();
    }, [])

    const getAdviceHandler = async () => {
        setIsLoading(true);
        setSlip((prev) => ({ ...prev, ...initAdvice}));
        retrieveAdvice();
    }

    const retrieveAdvice = async () => {
        const response: { slip: SlipType } = await fetch("https://api.adviceslip.com/advice")
            .then((res) => {
                return res.json();
            }).catch((err) => {
                throw err;
            });

        setSlip((prev) => ({ ...prev, ...response.slip }));

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }

    const { id, advice } = slip;

    const description = advice.trim().length > 0 ? `"${advice}"` : "Loading advice...";

    return <article class="relative bg-blue-dark-grayish rounded-xl max-w-[540px] mx-4 px-10 tablet:px-16 pt-10 tablet:pt-12 pb-[60px] tablet:pb-[72px]">
        { id > 0 && <p class="text-center text-advice text-green-neon">ADVICE #{id}</p> }

        <p class="text-center text-quote-mobile tablet:text-quote-tablet text-cyan-light mt-7">{description}</p>

        <div class="h-6 mt-7 tablet:mt-10 bg-divider-mobile tablet:bg-divider-tablet bg-center bg-no-repeat bg-auto"></div>

        <button class="absolute -bottom-16 left-2/4 -translate-x-1/2 -translate-y-1/2 bg-green-neon disabled:bg-green-neon-less disabled:shadow-none hover:bg-green-neon-more hover:shadow-neon p-5 rounded-full" onClick={getAdviceHandler} disabled={isLoading}>
            <img class={`object-fill ${isLoading && "animate-[spin_2s_linear_infinite]"}`} src={diceIcon} alt="Click here to randomize a quote" />
        </button>
    </article>
}

export default Advice;
