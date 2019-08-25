

getChirps();
$('#chirpButton').click(() => postChirps());
$('#deleteChirp').click(() => deleteChirp());


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
                            <button onclick="deleteChirp(${chirp.id})" type="button" class="btn btn-danger" id="deleteChirp">X</button>
                        </div>
                    </div>
                </article>
            `);
            })

        });
}

function postChirps() {
    let userInput = $('#userInput').val();
    let userChirp = $('#userChirp').val();
    let chirp = {
        user: userInput,
        chirp: userChirp
    }
    $.post({
        url: '/api/chirps',
        type: 'POST',
        data: chirp
    })
    .then(() => console.log("Chirp Added!"))
    .then(() => window.location.reload());
}

function deleteChirp(id) {
    $.ajax({
        url: `/api/chirps/${id}`,
        type: 'DELETE'
    })
    .then(() => {
        getChirps();
    })
}