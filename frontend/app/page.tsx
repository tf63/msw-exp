'use client'

import useSWR from 'swr'

export default function Msw() {
    const fetcher = (url: string) => fetch(url).then((res) => res.json())
    const { data, error, isValidating, mutate } = useSWR('/msw-user', fetcher, {
        revalidateOnFocus: false,
        shouldRetryOnError: false,
        revalidateOnMount: false
    })

    const onClick = () => {
        mutate()
    }

    return (
        <div>
            <h1>MSW</h1>
            {error && <p>データの読み込みに失敗しました。</p>}
            {data && (
                <div>
                    <p>名前: {data.name}</p>
                    <p>年齢: {data.age}</p>
                    <p>職業: {data.occupation}</p>
                </div>
            )}
            <button onClick={onClick}>モックデータを取得</button>
        </div>
    )
}
