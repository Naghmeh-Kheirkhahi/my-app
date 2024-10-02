import React from 'react';
import './Register.css';


function Register({mainClass , registerForm , formTitle}) {


    return (
        <>

            <section className={mainClass}>
                <div class="d-flex align-items-center" >
                    <div class="container">
                        <div class="row d-flex justify-content-center align-items-center">
                            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div class="card" className={registerForm}>
                                    <div class="card-body p-5">
                                        <h2 class="mb-5" className={formTitle}>Create an Account</h2>

                                        <form>

                                            <div data-mdb-input-init class="form-outline mb-4">
                                                <label class="form-label" for="form3Example1cg"><b>Your Name</b></label>
                                                <input type="text" id="form3Example1cg" class="form-control form-control-lg" />
                                            </div>

                                            <div data-mdb-input-init class="form-outline mb-4">
                                                <label class="form-label" for="form3Example3cg"><b>Your Email</b></label>
                                                <input type="email" id="form3Example3cg" class="form-control form-control-lg" />
                                            </div>

                                            <div data-mdb-input-init class="form-outline mb-4">
                                                <label class="form-label" for="form3Example4cg"><b>Password</b></label>
                                                <input type="password" id="form3Example4cg" class="form-control form-control-lg" />
                                            </div>

                                            <div data-mdb-input-init class="form-outline mb-4">
                                                <label class="form-label" for="form3Example4cdg"><b>Repeat your password</b></label>
                                                <input type="password" id="form3Example4cdg" class="form-control form-control-lg" />
                                            </div>

                                            <div class="form-check d-flex justify-content-center mb-5">
                                                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                                                <label class="form-check-label" for="form2Example3g">
                                                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                                                </label>
                                            </div>

                                            <div class="d-flex justify-content-center">
                                                <button type="button" data-mdb-button-init
                                                    data-mdb-ripple-init class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                            </div>

                                            <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                                                class="fw-bold text-body"><u>Login here</u></a></p>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Register
