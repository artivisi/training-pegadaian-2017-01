# OAuth 2 dengan Spring #

Cara mengetes flow `authorization-code` :

1. Masuk ke aplikasi `authserver`

        cd authserver

2. Jalankan aplikasi

3. Browse ke url authorization : `http://localhost:10000/oauth/authorize?client_id=tabunganapp&response_type=code&redirect_uri=http://example.com`

    ![Browse url authorize](img/01-akses-url-authorize.png)

4. Kita akan disuruh login dulu

    ![Login page](img/02-redirect-login.png)

5. Setelah login, tampil halaman konfirmasi. Lakukan approval

    ![Authorize App](img/03-authorize-app.png)

6. Redirect ke halaman berikutnya. Kita mendapatkan `authorization-code`

    ![Authcode](img/04-dapat-authcode.png)

7. Tukarkan `authorization-code` dengan `access-token`

	![Tukar dengan Token](img/05-tukar-dengan-token.png)

	![URL Token](img/06-url-token.png)

	![Basic Auth](img/07-basic-auth.png)

	![Access Token](img/08-access-token.png)

8. Token bisa dicek di url `check token`

    ![Check Token](img/09-url-check-token.png)

	![Tokennya](img/10-access-token-yang-mau-dicek.png)

	![Basic Auth](img/07-basic-auth.png)

	![Hasil Cek Token](img/11-hasil-cek-token.png)
