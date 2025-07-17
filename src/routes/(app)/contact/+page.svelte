<form class="form" action="https://form.taxi/s/sm58351s" method="POST" accept-charset="UTF-8">
	<fieldset style="border: 0px;">
		<label>
			Name
			<br />
			<input class="formfield" type="text" name="Name" required />
		</label>
		<br />
		<br />
		<label>
			E-Mail-Adresse<br />
			<input class="formfield" type="email" name="E-Mail" required />
		</label>
		<br />
		<br />
		<label>
			Deine Nachricht<br />
			<textarea class="formfield" rows="3" name="Nachricht" required></textarea>
		</label>
		<br />
		<br />
		<div>
			<label>
				<input type="checkbox" name="Datenverarbeitung best&auml;tigt" value="Ja" required />
				<span class="datenschutz-confirmed"
					>Ich best&auml;tige, dass ich mit der Verarbeitung meiner Eingaben zum Zweck der
					Anfragebearbeitung über den Drittanbieter form.taxi, einverstanden bin.</span
				>
			</label><br />
		</div>
	</fieldset>
	<div>
		<input type="text" name="_gotcha" value="" style="display:none;" />
		<button class="submit-button" type="submit">Absenden</button>
	</div>
</form>

<style>
	.form {
		border: 3px solid white;
        margin: auto;
        padding: 1rem;
        max-width: 350px;
	}

	.datenschutz-confirmed {
		font-size: 0.8rem;
		line-height: 0.5rem;
	}

	.formfield {
		width: 100%;
	}

    button {
        margin: 0.6rem;
    }
</style>