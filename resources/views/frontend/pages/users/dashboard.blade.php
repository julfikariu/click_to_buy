
@extends('frontend.pages.users.master')


@section('sub-content')


            <!-- Tabs -->
            <div class="classic-tabs">
                <!-- Nav tabs -->
                <div class="tabs-wrapper">
                    <ul class="nav tabs-primary primary-color" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link waves-light waves-effect waves-light" data-toggle="tab" href="#panel83"
                               role="tab" aria-selected="false">Personal
                                Clients</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link waves-light waves-effect waves-light active" data-toggle="tab"
                               href="#panel84" role="tab" aria-selected="true">Corporate Clients</a>
                        </li>
                    </ul>
                </div>
                <!-- Tab panels -->
                <div class="tab-content card">
                    <!-- Panel 1 -->
                    <div class="tab-pane fade" id="panel83" role="tabpanel">
                        <!-- Card content -->
                        <div class="card-body card-body-cascade text-center">



                        </div>
                        <!-- Card content -->
                    </div>
                    <!-- /.Panel 1 -->
                    <!-- Panel 2 -->
                    <div class="tab-pane fade active show" id="panel84" role="tabpanel">
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Company Name</th>
                                    <th>Username</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>PiedPiper</td>
                                    <td>@piedpiper</td>
                                    <td>
                                        <a class="blue-text" data-toggle="tooltip" data-placement="top" title=""
                                           data-original-title="See results"><i class="fas fa-user"></i></a>
                                        <a class="teal-text" data-toggle="tooltip" data-placement="top" title=""
                                           data-original-title="Edit"><i class="fas fa-pencil-alt"></i></a>
                                        <a class="red-text" data-toggle="tooltip" data-placement="top" title=""
                                           data-original-title="Remove"><i class="fas fa-times"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Github, Inc</td>
                                    <td>@github</td>
                                    <td>
                                        <a class="blue-text" data-toggle="tooltip" data-placement="top" title=""
                                           data-original-title="See results"><i class="fas fa-user"></i></a>
                                        <a class="teal-text" data-toggle="tooltip" data-placement="top" title=""
                                           data-original-title="Edit"><i class="fas fa-pencil-alt"></i></a>
                                        <a class="red-text" data-toggle="tooltip" data-placement="top" title=""
                                           data-original-title="Remove"><i class="fas fa-times"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Twitter, Inc</td>
                                    <td>@twitter</td>
                                    <td>
                                        <a class="blue-text" data-toggle="tooltip" data-placement="top" title=""
                                           data-original-title="See results"><i class="fas fa-user"></i></a>
                                        <a class="teal-text" data-toggle="tooltip" data-placement="top" title=""
                                           data-original-title="Edit"><i class="fas fa-pencil-alt"></i></a>
                                        <a class="red-text" data-toggle="tooltip" data-placement="top" title=""
                                           data-original-title="Remove"><i class="fas fa-times"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Alphabet, Inc</td>
                                    <td>@alphabet</td>
                                    <td>
                                        <a class="blue-text" data-toggle="tooltip" data-placement="top" title=""
                                           data-original-title="See results"><i class="fas fa-user"></i></a>
                                        <a class="teal-text" data-toggle="tooltip" data-placement="top" title=""
                                           data-original-title="Edit"><i class="fas fa-pencil-alt"></i></a>
                                        <a class="red-text" data-toggle="tooltip" data-placement="top" title=""
                                           data-original-title="Remove"><i class="fas fa-times"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Adobe Corporation</td>
                                    <td>@adobe</td>
                                    <td>
                                        <a class="blue-text" data-toggle="tooltip" data-placement="top" title=""
                                           data-original-title="See results"><i class="fas fa-user"></i></a>
                                        <a class="teal-text" data-toggle="tooltip" data-placement="top" title=""
                                           data-original-title="Edit"><i class="fas fa-pencil-alt"></i></a>
                                        <a class="red-text" data-toggle="tooltip" data-placement="top" title=""
                                           data-original-title="Remove"><i class="fas fa-times"></i></a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- /.Panel 2 -->
                </div>
                <!-- /.Tabs -->
            </div>

@endsection