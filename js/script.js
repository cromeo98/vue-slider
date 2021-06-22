// Descrizione: Rifare l'esercizio dello slider come fatto assieme in classe.
// Bonus: Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.

const app = new Vue(
    {
        el: '#root',
        data: {
            imgs:[
                'praia-da-falesia.jpg',
                'praia-da-marinha.jpg',
                'praia-da-rocha.jpg',
                'praia-de-dona-ana.jpg',
                'praia-do-camilo.jpg'
            ],
            alts:[
                'praia da falesia',
                'praia da marinha',
                'praia da rocha',
                'praia de dona ana',
                'praia do camilo'
            ],
        }
    }
);