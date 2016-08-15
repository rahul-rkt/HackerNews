<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use GuzzleHttp\Client;
use Symfony\Component\DomCrawler\Crawler;

class ArticleController extends Controller
{
    /**
     * Fetches article details.
     *
     * @param  article url
     * @return json response
     */
    public function getArticleDetails($url)
    {
        $httpClient = new Client();

        $statusCode = 404;
        $log = "";
        $title = "n/a";
        $description = "n/a";

        try
        {
            $urlResponse = $httpClient->get($url);

            $statusCode = $urlResponse->getStatusCode();
            $log = $urlResponse->getReasonPhrase();

            if($statusCode == 200)
            {
                $domCrawler = new Crawler((string) $urlResponse->getBody());
                $title = $domCrawler->filterXPath("//title")->text();
                $description = $domCrawler->filterXPath("//meta[@name='description']")->attr("content");
            }
        } catch (\InvalidArgumentException $e) {
        } catch (\Exception $e) {
            $log = "Bad URL! Check and try again.";
        }

        return response()->json([
            "status"            => $statusCode,
            "log"               => $log,
            "title"             => $title,
            "description"       => $description
        ]);
    }
}
