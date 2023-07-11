'use client'; 

export default function ErrorWrapper ({error}: {error : Error}) {
    return <h1>Error! Not found! {error.message}</h1>
}