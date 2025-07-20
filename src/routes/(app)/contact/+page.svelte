<form class="form" action="https://form.taxi/s/sm58351s" method="POST" accept-charset="UTF-8">
	<fieldset>
		<label>
			Name
			<br />
			<input class="form-field" type="text" name="Name" required />
		</label>
		<br />
		<br />
		<label>
			E-Mail-Adresse<br />
			<input class="form-field" type="email" name="E-Mail" required />
		</label>
		<br />
		<br />
		<label>
			Deine Nachricht<br />
			<textarea 
				class="text-field" 
				maxlength="1000" 
				rows="7" 
				colums=12 
				name="Nachricht" 
				required>
			</textarea>
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
		border: 3px solid var(--white);
        margin: auto;
        padding: 1rem;
        max-width: 350px;
	}

	.datenschutz-confirmed {
		font-size: 0.8rem;
		line-height: 0.5rem;
	}

	.form-field {
		width: 100%;
		height: 2rem;
		border-radius: 0.8rem;
		background-color: var(--white);
		    box-shadow: none;

	}

	.form-field:focus {
		width: 100%;
		border: 3px solid var(--accent);
		outline: none;
	}

	fieldset {
		border: 0px;
	}

	.text-field {
		width: 100%;
		border-radius: 0.8rem;
		resize: none;
		border: 3px solid var(--accent);
		outline: none;
		background-color: var(--white);

	}

    button {
        margin: 0.6rem;
    }

</style>