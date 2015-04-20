<!DOCTYPE html>
<html>
<head>

    <!-- set the "root" url of the application - change this based on your configuration -->
    <base href="/" />

    <!-- meta -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- titles/icons -->
    <title>ZenBanx :: Mobile Banking</title>
    <link rel="icon" href="favicon.ico">

    <!-- styles -->
    <link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.1/animate.min.css">
    <link rel="stylesheet" type="text/css" href="/static/css/styles.min.css"/>

    <!-- libs -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.0.3/wow.min.js"></script>

    <!-- scripts -->
    <script src="/static/js/scripts.js"></script>


    <script type="text/javascript">
        document.createElement('video');
        document.createElement('audio');
        document.createElement('track');
    </script>

    <link href="//vjs.zencdn.net/4.12/video-js.css" rel="stylesheet">
    <script src="//vjs.zencdn.net/4.12/video.js"></script>


    <style>

        .video-js {
            position: static;
        }

        .video-js .vjs-tech {
            min-width: 100%;
            min-height: 100%;
            height: auto;
            width: auto;
            bottom: 0 !important;
            top: auto !important;
        }

        section.banner.main {
            height: auto;
            min-height: 330px;
            position: relative;
        }

        @media screen and (min-width: 1080px ){
            section.banner.main {
                height: 440px;
            }
        }

        @media screen and (max-width: 768px ){
            #bgvid {
                display: none;
            }
        }

        .banner.main {
            background: teal;
        }

    </style>


</head>
<body>

    <?php include('main-navigation.php'); ?>

