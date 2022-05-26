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
            id: '3f8b373d-82ee-4e8f-aee4-baef78f45ee2',
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=3f8b373d-82ee-4e8f-aee4-baef78f45ee2&groupId=80341867-c2f8-41d8-8c92-ed42fd7dccc2&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLWVhc3QtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9",
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMWNlZjlhNTktNjJlYy00MThhLTk2NjYtMmIzYWZjMmQyY2IwLyIsImlhdCI6MTY1MzU4MzM0MCwibmJmIjoxNjUzNTgzMzQwLCJleHAiOjE2NTM1ODg0NTEsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBWFFBaS84VEFBQUF2UGJ3VEhMcHFFSUtIcDdxWHNiRkgrN0p6NUdSZklPS3NPTTQ0VkZZd2REMXRBY0JaeTdxemFDdlBhejVaSnhHM1dLTEtFRThNU1V0M3I5WTA4MW9OYVVIMzFEUkIxYmJnY21rRjhDdFVsWEk5cnRseURBeFM0V3lhS0ZKbVZUZk4yN1RlSWE2dUhRamZmZ2w2b3ZGQWc9PSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwaWQiOiI4NzFjMDEwZi01ZTYxLTRmYjEtODNhYy05ODYxMGE3ZTkxMTAiLCJhcHBpZGFjciI6IjIiLCJmYW1pbHlfbmFtZSI6Ik9jcmFuIiwiZ2l2ZW5fbmFtZSI6Ik1hcmllIExvdWlzZSIsImlwYWRkciI6IjQ3LjE4OC4xNDYuMTQzIiwibmFtZSI6Ik9jcmFuLCBNYXJpZSBMb3Vpc2UiLCJvaWQiOiI3ZTcwMWY0Yi05NmM5LTRjNGUtYWQwNy1lMTJkNzE3NGY1ZmQiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMTE3NjEzNTU0MC0xNjc1ODA5MTItNTM4MjcyMjEzLTQ0NTA0NiIsInB1aWQiOiIxMDAzMjAwMTZGQThFRTMzIiwicmgiOiIwLkFRNEFXWnJ2SE94aWlrR1daaXM2X0Mwc3NBa0FBQUFBQUFBQXdBQUFBQUFBQUFBT0FQby4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJLY2psZWlYNWNvb2VzQXhxc3NGcFp1UndTMG5seDE5TUxUWjM5eWVYNGRZIiwidGlkIjoiMWNlZjlhNTktNjJlYy00MThhLTk2NjYtMmIzYWZjMmQyY2IwIiwidW5pcXVlX25hbWUiOiJPY3Jhbk1hcmllTG91aXNlQHByYWludGwuY29tIiwidXBuIjoiT2NyYW5NYXJpZUxvdWlzZUBwcmFpbnRsLmNvbSIsInV0aSI6IllzRzRCX3VCSUVPY1NCeTlzQ1F6QUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.G3ReSqz5rBFmQ10r4UWusb0wWs_VuENRKoVHJCxTBQ6CfQpTRVq-uJV3dRiXSEyNK6QwaNmnoa27GD2giGgHxi-OY227vBuSVJroxnpz9FN-Z-CuPHWjvvh-d92cILqvxDH1ymtyFIjUc2Uoss6UQQhQXNXb53IZDuqQ73j44zfiO66yqkn27D1v8ommJ9aviyrXbfjHmPlTOtkeIp_7h1a5281zYYZkpKPx9EJzatAahWb2TTWyHrGqv7ilulAXiVtteeEfS6ajUBAPuZTlg9mkn4XCMk0LpwtCD8ytFVDaX6efNhPRUw3hedc_OdW9pc4UUuRmVG-mp-hK325XaA',
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
