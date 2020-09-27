<?php
namespace App\Helpers;


class GravatarHelper
{

    /*
     * Validate_gravatar
     *
     * Check if the email has any gravatar image or not
     *
     * @param string $email Email of the user
     * @return boolean true, if there is an image. False otherwise
     */

    public static function validate_gravatar($email){

        $hash = md5(strtolower(trim($email)));
        $uri = 'http://www.gravatar.com/avatar/' . $hash . '?d=404';
        $headers = @get_headers($uri);
          if (!$headers) {
            $has_valid_avatar = FALSE ;
        } else {
            $has_valid_avatar = TRUE;
        }
        return $has_valid_avatar;

    }

    /**
     * Gravatar Image
     *
     * Get the gravatar image from the email address
     *
     * @param  string $email User email
     * @param integer $size Size of the image
     * @param string $d type of image if not gravatar image
     * @return string  gravatar image url
     */
    public static function gravatar_image($email, $size = 0, $d = "")
    {
        $hash = md5($email);
        $image_url = 'http://www.gravatar.com/avatar/' . $hash . '?s=' . $size . '&d=' . $d;
        return $image_url;
    }

}