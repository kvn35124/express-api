
getChirps();
postChirps();
getChirps();


function getChirps() {
    $.ajax({
        url: '/api/chirps',
        type: 'GET'
    })
        .then(chirps => {
    
            chirps.forEach(chirp => {
                $('#timeline').append(`
                <article class="col-md-7">
                    <div class="card shadow border border-dark m-1">
                        <div class="card-body">
                            <h4>${chirp.user} chirped:</h4>
                            <p class="card-text">${chirp.chirp}</p>
                        </div>
                        <div class="card-footer">
                            <p class="text-muted">${chirp.id}</p>
                        </div>
                    </div>
                </article>
            `);
            })
    
        });
}

function postChirps() {
    $('#chirpButton').click(() => {
        // event.preventDefault();
        let userInput = $('#userInput').val();
        let userChirp = $('#userChirp').val();
        let chirp = {
            user: userInput,
            chirp: userChirp
        }
    })
    $.post({
        url: '/api/chirps',
        type: 'POST'
    })
}