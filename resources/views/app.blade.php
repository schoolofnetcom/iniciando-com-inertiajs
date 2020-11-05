<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <script src="{{ mix('/js/app.js') }}" defer></script>
  </head>
  <body>
        @routes

        @if($page['props']['title'])

            {{ $page['props']['title'] }}

        @endif

        <br>

        @if($onlyView)

            {{ $onlyView }}

        @endif

        @inertia

        <script>
            // console.log(Ziggy.namedRoutes)
            // console.log(route('my-first-route'))
        </script>
  </body>
</html>
