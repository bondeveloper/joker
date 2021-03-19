import React from 'react';
import { NetworkStatus } from '@apollo/client';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Figure from 'react-bootstrap/Figure';

import { useGetJoke } from '../../../../store/hooks/jokes/useGetJoke';

interface IJoke {
    category: string
}

const Joke: React.FC< IJoke > = ( { category } : IJoke ) => {
    const { loading, error, data, refetch, networkStatus } = useGetJoke( category );

    let spinner, joke = null;

    if ( ( networkStatus === NetworkStatus.refetch ) || loading || error ) {
        spinner = ( ( networkStatus === NetworkStatus.refetch ) || loading )
                    ? <Spinner animation='grow' variant='info' /> 
                    : null;
    } else {
        joke = data?.joke;
    }

    const display = joke ? (
       <div>
            <Jumbotron>
            <div>
                <Button variant='link' href={joke?.url} target='_blank'>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt='Joke Image'
                            src={joke?.icon_url}
                        />
                    </Figure>
                </Button>
            </div>
            <p>
            {joke?.value}
            </p>
            </Jumbotron>
            <Button variant='info' onClick={() => refetch()}> refetch! </Button>
       </div>
    ): spinner;

    return ( 
        <>
        { display }
        </>
     );
};

export default Joke;