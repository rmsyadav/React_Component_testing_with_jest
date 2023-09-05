
const Feedback = ()=>{

    return(
    <>
        <div class="mx-0 mx-sm-auto">
        <div class="card">
            <div class="card-header bg-primary">
            <h5 class="card-title text-white mt-2" id="exampleModalLabel">Feedback request</h5>
            </div>
            <div class="modal-body">
            <div class="text-center">
                <i class="bi bi-filetype-txt  mb-3 text-primary"></i>
                <i class="far fa-file-alt "></i>
                <p>
                <strong>Your opinion matters</strong>
                </p>
                <p>
                Have some ideas how to improve our product?
                <strong>Give us your feedback.</strong>
                </p>
            </div>

            <hr />

            <form class="px-4" action="">
                <p class="text-center"><strong>Your rating:</strong></p>

                <div class="form-check mb-2">
                <input class="form-check-input" type="radio" name="exampleForm" id="radio3Example1" />
                <label class="form-check-label" for="radio3Example1">
                    Very good
                </label>
                </div>
                <div class="form-check mb-2">
                <input class="form-check-input" type="radio" name="exampleForm" id="radio3Example2" />
                <label class="form-check-label" for="radio3Example2">
                    Good
                </label>
                </div>
                <div class="form-check mb-2">
                <input class="form-check-input" type="radio" name="exampleForm" id="radio3Example3" />
                <label class="form-check-label" for="radio3Example3">
                    Medicore
                </label>
                </div>
                <div class="form-check mb-2">
                <input class="form-check-input" type="radio" name="exampleForm" id="radio3Example4" />
                <label class="form-check-label" for="radio3Example4">
                    Bad
                </label>
                </div>
                <div class="form-check mb-2">
                <input class="form-check-input" type="radio" name="exampleForm" id="radio3Example5" />
                <label class="form-check-label" for="radio3Example5">
                    Very bad
                </label>
                </div>

                <p class="text-center"><strong>What could we improve?</strong></p>
                <div class="form-outline mb-4">
                <textarea class="form-control" id="form4Example3" rows="4"></textarea>
                <label class="form-label" for="form4Example3">Your feedback</label>
                </div>
            </form>
            </div>
            <div class="card-footer text-end">
            <button type="button" class="btn btn-primary">Submit</button>
            </div>
        </div>
        </div>
    </>
 );
}

export default Feedback;