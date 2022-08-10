import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <PowerBIEmbed
          embedConfig={{
            type: 'report',   // Supported types: report, dashboard, tile, visual and qna
            id: 'ccb84689-5bae-434f-8641-8be1ac7da586',
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=ccb84689-5bae-434f-8641-8be1ac7da586&groupId=1bde930d-2523-4e58-820e-2366252138bb&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLWVhc3QtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9",
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMWNlZjlhNTktNjJlYy00MThhLTk2NjYtMmIzYWZjMmQyY2IwLyIsImlhdCI6MTY2MDE2Mjk2MSwibmJmIjoxNjYwMTYyOTYxLCJleHAiOjE2NjAxNjc2MTksImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUFoMVNGRXA5NVVDM2ZhcU83bGZUcS9Ic0p1R3hVVXo3WFZGMXZOVUZZT1k5TVJvMWZhRmY1YUZZdWhPNjRBS20vVnZVZDdZdis0b1RUQXZLWVcvaEJ1UVY5VGNqQTJPQWtkYzloTDZWZjhHcz0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIyIiwiZmFtaWx5X25hbWUiOiJPY3JhbiIsImdpdmVuX25hbWUiOiJNYXJpZSBMb3Vpc2UiLCJpcGFkZHIiOiIxOTkuOTYuMjU0LjI1MCIsIm5hbWUiOiJPY3JhbiwgTWFyaWUgTG91aXNlIiwib2lkIjoiN2U3MDFmNGItOTZjOS00YzRlLWFkMDctZTEyZDcxNzRmNWZkIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTExNzYxMzU1NDAtMTY3NTgwOTEyLTUzODI3MjIxMy00NDUwNDYiLCJwdWlkIjoiMTAwMzIwMDE2RkE4RUUzMyIsInJoIjoiMC5BUTRBV1pydkhPeGlpa0dXWmlzNl9DMHNzQWtBQUFBQUFBQUF3QUFBQUFBQUFBQU9BUG8uIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiS2NqbGVpWDVjb29lc0F4cXNzRnBadVJ3UzBubHgxOU1MVFozOXllWDRkWSIsInRpZCI6IjFjZWY5YTU5LTYyZWMtNDE4YS05NjY2LTJiM2FmYzJkMmNiMCIsInVuaXF1ZV9uYW1lIjoiT2NyYW5NYXJpZUxvdWlzZUBwcmFpbnRsLmNvbSIsInVwbiI6Ik9jcmFuTWFyaWVMb3Vpc2VAcHJhaW50bC5jb20iLCJ1dGkiOiJVaEIyOV8tamJFUzJlUlA5XzA1ZUFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.DaN-pOZ4YWJGlmGrwtFmdk1Upr-n7VkmXurSiOhyWPhjkcvTvKe4T_y_oegJFK8seg2IM511om9SUE6hGCg89LCqeNXqKN6pXKo2fsXl73PKGDOghHGiM4iHo99_-61MO471j0HJVS48tMyJeFXqVpD4CuKcGsOYVxdYFW6vMfZOB5crslO2NC0jisbw7UkTtw-swk6VtR4ZuaF73wOzdZhy-d6fGjrt2sh9uVyWZa_-L-D0RDMfD00oHt5RZEXdbYfEOH6muUgk54a2hHkudBUVu7hRpLaZviSjfzXfuGV0NuBHgfp3JrwiiRep3FL1GC1MHwpl_PmbT_fxtbfuvA',
            tokenType: models.TokenType.Aad,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: true
                }
              },
            }
          }}

          eventHandlers={
            new Map([
              ['loaded', function () { console.log('Report loaded'); }],
              ['rendered', function () { console.log('Report rendered'); }],
              ['error', function (event) { console.log(event.detail); }]
            ])
          }

          cssClassName={"Embed-container"}

          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
      </header>
    </div>
  );
}

export default App;
