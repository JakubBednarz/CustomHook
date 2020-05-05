import React, { useCallback, useState } from 'react';

    function Example() {
      
    const useSetState = (initialState) => {
        const initialStateObj = initialState == null || undefined ? {} : ({}).valueOf.call(initialState);
        const [state, setSomething] = useState(initialStateObj);
        const setState = useCallback(params => {
            setSomething(prevState => Object.assign({}, prevState, params instanceof Function ? params(prevState) : params));
        }, [setSomething]);
        return [state, setState];
    };

    const [count, setCount] = useState(0);
    const [some, setSome] = useSetState({properCount: 5});


    return (
        <div>
            <p>Kliknięto {count} razy</p>
            <button onClick={() => setCount(count + 1)}>
                Kliknij mnie
            </button>
            <p>Kliknięto {some.properCount} razy z properCount</p>
            <button onClick={() => setSome({properCount: some.properCount + 1})}>
                Kliknij mnie
            </button>
            <p>Kliknięto {some.test} razy z testem</p>
            <button onClick={() => setSome((prevState) => ({test: (prevState.test || 0) + 1}))}>
                Kliknij mnie
            </button>
            <button onClick={() => setSome({properString: "Why not?"})}>
                Dont click
            </button>
        </div>
    );
};

export default Example

