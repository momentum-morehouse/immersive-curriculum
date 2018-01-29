class LanguageHelper

  class << self
    def to_sentence(array)
      words_connector     = ", "
      two_words_connector = " and "
      last_word_connector = ", and "

      case array.length
        when 0
          ""
        when 1
          array[0].to_s.dup
        when 2
          "#{array[0]}#{two_words_connector}#{array[1]}"
        else
          "#{array[0...-1].join(words_connector)}#{last_word_connector}#{array[-1]}"
      end
    end
  end

end