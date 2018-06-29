/* Arquivo JavaScript*/


function validacao()
{
			var digito = new Array(14);
			var CPF = new Array(11);
			var I,J,DV1,DV2;
			digito = document.cadastro.txtcpf.value

			J = 0;
			for(I=0;I<14;I++) //I++ ~ I=I+1 INCREMENTO//
			{

				if(digito[I]==1 || digito[I]==2 || digito[I]==3 ||
					digito[I]==4 || digito[I]==5 || digito[I]==6 ||
					digito[I]==7 || digito[I]==8 || digito[I]==9 || digito[I]==0)

				{
					CPF[J] = digito[I];
					J++;
				}
				
			}//fim do for

			if(J<11) alert("Esse dado não corresponde a um CPF! CPF é formado por 11 digitos.");
			else
			{
				if (CPF[0] == CPF[1] && CPF[1] == CPF[2] && CPF[2] == CPF[3] && CPF[3] == CPF[4] && CPF[4] == CPF[5] && CPF[5] == CPF[6] && CPF[6] == CPF[7] && CPF[7] == CPF[8])
					{
						alert("CPF Inválido, pois  os digitos não podem ser iguais");
					}
				
				else

					DV1 = CPF[0] * 10 + CPF[1] * 9 + CPF[2] * 8 + CPF[3] * 7 + CPF[4] * 6 + CPF[5] * 5 + CPF[6] * 4 + CPF[7] * 3 + CPF[8] * 2;

					DV1 = (DV1 * 10) % 11;

				if (DV1 > 9) DV1 = 0;

					DV2 = CPF[0] * 11 + CPF[1] * 10 + CPF[2] * 9 + CPF[3] * 8 + CPF[4] * 7 + CPF[5] * 6 + CPF[6] * 5 +CPF[7] * 4  + CPF[8] * 3 + DV1 * 2;

					DV2 = (DV2 * 10) % 11; 

				if (DV2 > 9) DV2 = 0;

				if (CPF [9] == DV1 && CPF [10] == DV2)
					{
						alert("CPF correto");
					}
				else
				{
					alert("CPF Inválido!");
					return false;
				}
			}
			{
				
			
				senha1 = document.cadastro.senha1.value
				senha2 = document.cadastro.senha2.value
 
				if (senha1 != senha2)
					{
						alert("SENHAS DIFERENTES")
						document.cadastro.senha2.focus();
						return false;
					}


					if(document.cadastro.senha1.value.length < 8)
						{
							alert("A senha deve conter no mínimo 8 caracteres.");
							document.cadastro.senha1.focus();
							return false;
						}
			}
}