# Cookie Stand ! 🍪

<!DOCTYPE html>
<html>

<head>
    <title>Salamon Cookies</title>
  <link rel="stylesheet" href="css/style.css">

</head>


  
    <main>
        <form id="CookiesShopForm">
            <fieldset>
                <legend>Cookies Shop Information</legend>
                <label>Shop location:</label>
                <input type="text" name="location">
                <label>Min / Cust: </label>
                <input type="number" name="min">
                <label>Max / Cust:</label>
                <input type="number" name="max">
                <label>Avg Cookie / Sale</label>
                <input type="number" step="0.1" name="avg">
            </fieldset>
            <button type="submit" id="submit">Submit</button>
        </form>
        <div id="cookiesshops">

        </div>
    </main>

</body>
<script src="js/app.js">
</script>

</html>