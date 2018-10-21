from cipher import PlaintextMessage, CiphertextMessage


def test_can_encrypt():
    plaintext = PlaintextMessage('hello', 2)
    assert plaintext.get_message_text_encrypted() == 'jgnnq'


def test_can_decrypt():
    ciphertext = CiphertextMessage('jgnnq')
    assert ciphertext.decrypt_message() == (24, 'hello')
